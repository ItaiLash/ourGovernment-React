from greedy_pav import *
import json
import csv
from itertools import combinations ,chain
import os

def powerset(iterable):
    s = list(iterable)
    return chain.from_iterable(combinations(s, r) for r in range(len(s)+1))

def voter_agree(voters: list[Voter])->list:
    res=[]
    count=0
    v=voters[0]
    for c in v.preferences:
        for voter_preferences in voters:
            if c in voter_preferences.preferences:
                count+=1
        if count == len(voters):
            res.append(c)
        count=0
    return res


def Global_Justified_Representation(X_result:dict, voters: list[Voter],offices_candidates: dict ):
    X=[Candidate(j,i) for i,j in X_result.items()]
    # print(X)
    s=f'''Global_Justified_Representation:\n
    V:set of all voters
    n:number of voters
    k:number of offices
    X:office allocation
    Aj:all the candidates that run to office j
    A:∪Aj all the candidates
    X is said to satisfy Global Justified Representation
    For each subgroup of voters V'⊆ V that its size >= n/k and for all Aj:
    Define c_V': set of all the candidates that all the voters in V' agree on
    if (c_V' ∩ Aj) !=∅ then (c_V' ∩ X) !=∅
    
    All the subgroup that we discuss for this results:\n 
    '''
    V=list(powerset(voters))
    for v in V:
        s+=f"{v} |V'|={len(v)}, n/k={len(voters)/len(offices_candidates.keys())}\n"
        if len(v)>=(len(voters)/len(offices_candidates.keys())):
            v_agree = voter_agree(v)
            for office,A_j in offices_candidates.items():
                if len(set(v_agree).intersection(A_j))>0:
                    s+=f"subgroup of voters{v} agree on {set(v_agree).intersection(A_j)} for office {office} then\n"
                    if len(set(v_agree).intersection(X)) > 0:
                        s+=f"{set(v_agree).intersection(X)} was chosen which they also agree on\n"
                    else:
                        print("bad")
        else:
            s+=F"|V'|={len(v)} < n/k={len(voters)/len(offices_candidates.keys())}, so V' is to small.\n"
    return s



def from_json(json_res: str):
    res_dict = json.loads(json_res)
    candidates = res_dict['candidates']
    voters = res_dict['voters']
    offices_candidates = {}
    for candidate_list in candidates.values():
        for candidate in candidate_list:
            c = Candidate(candidate['name'], candidate['office'])
            if c.office not in offices_candidates:
                offices_candidates[c.office] = []
            offices_candidates[c.office].append(c)
    voter_list = []
    for voter in voters:
        preferences=[]
        for pref in voter["preferences"]:
            preferences.append(Candidate(**pref))
        v = Voter(preferences)
        print(v)
        voter_list.append(v)

    return offices_candidates, voter_list
def convert_request(offices:list=[],candidates:list=[],voters:list=[]):
    offices_candidates = {}
    voter_list = []
    num_to_office={i:offices[i] for i in range(len(offices))}
    for office_num in range(len(candidates)):
        for candidate in candidates[office_num]:
            c=Candidate(candidate,num_to_office[office_num])
            if c.office not in offices_candidates:
                offices_candidates[c.office] = []
            offices_candidates[c.office].append(c)
    for voter in voters:
        preferences=[]
        for i in range(len(voter)):
            preferences.append(Candidate(voter[i],num_to_office[i]))
        v = Voter(preferences)
        voter_list.append(v)
    return offices_candidates, voter_list

def demo():
    a = Candidate('a', '1')
    b = Candidate('b', '1')
    c = Candidate('c', '2')
    d = Candidate('d', '2')
    e = Candidate('e', '3')
    f = Candidate('f', '3')
    g = Candidate('g', '3')
    dict = {'1': [a, b], '2': [c, d], '3': [e, f, g]}
    v_1 = Voter([a, c, e],"Moshe")
    v_2 = Voter([a, c, f],"Dani")
    v_3 = Voter([a, d, f],"Roee")
    voters = [v_1, v_2, v_3]
    candidates=dict
    with open("j.json","w") as f:
        json.dump({'candidates':candidates,'voters':voters},fp=f,default=lambda o:o.__dict__,indent=4)
    return dict,voters
def demo2():
    a = Candidate('a', '1')
    b = Candidate('b', '1')
    c = Candidate('c', '2')
    d = Candidate('d', '2')
    e = Candidate('e', '3')
    f = Candidate('f', '3')
    g = Candidate('g', '3')
    dict = {'1': [a, b], '2': [c, d], '3': [e, f, g]}
    v_1 = Voter([a, c, e])
    v_2 = Voter([a, c, f])
    v_3 = Voter([a, d, f])
    voters = [v_1, v_2, v_3]
    candidates=dict

    s=json.dumps({'candidates':candidates,'voters':voters},default=lambda o:o.__dict__,indent=4)
    return s

def from_csv(file):

    row=[]

    with open(file) as f:
        csv_reader=csv.reader(f)
        h=next(csv_reader)
    print(h)
    # if os.path.exists(file):
    #     os.remove(file)

def define_result(dic_res:dict={})-> str:
    res=''
    for office,winner in dic_res.items():
        res+=f"The candidate who selected for the Ministry of {office} is {winner}.\n"
    return res


def start_algo(json_res: str=None):
    print(json_res)
    if json_res:
        # offices_candidates, voter_list = from_json(json_res)
        offices_candidates, voter_list = convert_request(json_res['offices'] ,json_res['candidates'] ,json_res['voters'])
    else :
        offices_candidates, voter_list = demo()
    a=greedy_PAV(voters=voter_list, offices_candidates=offices_candidates)
    res=define_result(a)
    s=Global_Justified_Representation(a, voter_list, offices_candidates )
    print(s)
    with open("explanation.txt",'w',encoding="utf-8") as f:
        f.write(s)
    return a,res

if __name__ == '__main__':
    # s=demo2()
    # print(start_algo(s))
    a=start_algo()
    print(a)


