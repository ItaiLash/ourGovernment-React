from greedy_pav import *
import json


def from_json(json_res: str):
    res_dict = json.loads(json_res)
    candidates = res_dict['candidates']
    voters = res_dict['voters']
    offices_candidates = {}
    for candidate in candidates.value():
        c = Candidate(candidate['name'], candidate['office'])
        # if c.office not in offices_candidates:
        #     offices_candidates[c.office] = []
        offices_candidates[c.office].append(c)
    voter_list = []
    for voter in voters.values():
        v = Voter(**voter)
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
    return dict,voters

def start_algo(json_res: str=None):
    if json_res:
        offices_candidates, voter_list = from_json(json_res)
    else :
        offices_candidates, voter_list = demo()
    return greedy_PAV(voters=voter_list, offices_candidates=offices_candidates)
