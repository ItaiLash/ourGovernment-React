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


def start_algo(json_res: str):
    offices_candidates, voter_list = from_json(json_res)
    return greedy_PAV(voters=voter_list, offices_candidates=offices_candidates)
