from voter import *
from candidate import *
import doctest

def highest_candidate(candidates_list: list[Candidate], voters: list[Voter]):
    """
    Compute the candidate who got the highest score according to Greedy PAV algorithm,
    for each candidate sum the weights of each voter who voted to him
    :param candidates_list: list of candidates
    :param voters: list of voters
    :return:candidate who got the highest score
    """
    res = {candidate.name: 0 for candidate in candidates_list}
    for candidate in candidates_list:
        for voter in voters:
            if candidate in voter.preferences:
                res[candidate.name] += voter.weight

    return max(candidates_list, key=lambda candidate: res[candidate.name])


def greedy_PAV(voters: list[Voter] = None, offices_candidates: dict = None) -> dict:
    """
    Compute the Greedy PAV algorithm

    :param voters:list of voters
    :param offices_candidates: dict of offices and candidates
    :return:dict with a winner candidate for each office
    >>> a = Candidate('a', '1')
    >>> b = Candidate('b', '1')
    >>> c = Candidate('c', '2')
    >>> d = Candidate('d', '2')
    >>> e = Candidate('e', '3')
    >>> f = Candidate('f', '3')
    >>> g = Candidate('g', '3')
    >>> dict = {'1': [a, b], '2': [c, d], '3': [e, f, g]}
    >>> v_1 = Voter([a, c, e])
    >>> v_2 = Voter([a, c, f])
    >>> v_3 = Voter([a, d, f])
    >>> voters = [v_1, v_2, v_3]
    >>> greedy_PAV(voters, dict)
    {'1': 'a', '2': 'c', '3': 'f'}
    """
    discription=''
    number_of_offices = len(offices_candidates)
    candidates_list = [candidate for office in offices_candidates.values() for candidate in office]
    results = {office: "" for office in offices_candidates}
    for i in range(number_of_offices):
        chosen_candidate = highest_candidate(candidates_list, voters)
        results[chosen_candidate.office] = chosen_candidate.name
        candidates_list = list(filter(lambda candidate: candidate.office != chosen_candidate.office, candidates_list))
        # map(lambda voter: voter.reweight(), list(filter(lambda voter: chosen_candidate in voter.preferences, voters)))
        for voter in voters:
            if chosen_candidate in voter.preferences:
                voter.reweight()

    return results,discription


if __name__ == '__main__':
    (failures, tests) = doctest.testmod(report=True)
    print("{} failures, {} tests".format(failures, tests))


