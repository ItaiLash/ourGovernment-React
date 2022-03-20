from greedy_pav import *
import json


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
def demo():
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


def start_algo(json_res: str=None):
    print(json_res)
    if json_res:
        offices_candidates, voter_list = from_json(json_res)
    else :
        offices_candidates, voter_list = demo()
    return greedy_PAV(voters=voter_list, offices_candidates=offices_candidates)
if __name__ == '__main__':
    s=demo2()
    print(start_algo(s))
    # print(start_algo())

