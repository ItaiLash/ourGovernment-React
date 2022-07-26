from provider.model.voter import *
from provider.model.candidate import *
import doctest
import logging
from typing import List

logging.basicConfig(filename="../../PAV_algorithm.log", format='%(asctime)s - %(message)s', datefmt='%d-%b-%y %H:%M:%S',
                    level=logging.DEBUG)


def highest_candidate(candidates_list: List[Candidate], voters: List[Voter]):
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
    chosen_candidate = max(candidates_list, key=lambda candidate: res[candidate.name])
    logging.info("For office {}, candidate {} was elected with vote's weight of {} out of vote's weight of {}".format(
        chosen_candidate.office, chosen_candidate.name, res[chosen_candidate.name], sum(res.values())))

    return chosen_candidate


def greedy_PAV(voters: List[Voter] = None, offices_candidates: dict = None) -> dict:
    """
    Compute the Greedy PAV algorithm

    :param voters:list of voters
    :param offices_candidates: dict of offices and candidates
    :return:dict with a winner candidate for each office
    Examples:
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


    >>> a = Candidate('a', '1')
    >>> b = Candidate('b', '1')
    >>> c = Candidate('c', '1')
    >>> d = Candidate('d', '2')
    >>> e = Candidate('e', '2')
    >>> f = Candidate('f', '2')
    >>> dict = {'1': [a, b, c], '2': [d, e, f]}
    >>> v_1 = Voter([a, d])
    >>> v_2 = Voter([b, e])
    >>> v_3 = Voter([c, f])
    >>> voters = [v_1, v_2, v_3]
    >>> greedy_PAV(voters, dict)
    {'1': 'a', '2': 'e'}

    >>> a = Candidate('a', '1')
    >>> b = Candidate('b', '1')
    >>> c = Candidate('c', '2')
    >>> d = Candidate('d', '2')
    >>> e = Candidate('e', '3')
    >>> f = Candidate('f', '3')
    >>> g = Candidate('g', '3')
    >>> h = Candidate('h', '4')
    >>> k = Candidate('k', '4')
    >>> l = Candidate('l', '5')
    >>> m = Candidate('m', '5')
    >>> n = Candidate('n', '6')
    >>> o = Candidate('o', '6')
    >>> p = Candidate('p', '6')
    >>> q = Candidate('q', '7')
    >>> r = Candidate('r', '7')
    >>> dict = {'1': [a, b], '2': [c, d], '3': [e, f, g], '4': [h, k], '5': [l, m], '6': [n, o, p], '7': [q, r]}
    >>> v_1 = Voter([a, c, e, h, m, n, r])
    >>> v_2 = Voter([a, c, f, h, l, o, q])
    >>> v_3 = Voter([a, d, f, k, m, p, r])
    >>> v_4 = Voter([b, c, e, k, l, p, q])
    >>> v_5 = Voter([b, c, f, k, m, o, r])
    >>> v_6 = Voter([b, d, f, k, m, p, r])
    >>> v_7 = Voter([a, d, e, h, l, o, q])
    >>> v_8 = Voter([b, d, e, h, m, n, q])
    >>> v_9 = Voter([a, d, f, k, m, o, q])
    >>> voters = [v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9]
    >>> greedy_PAV(voters, dict)
    {'1': 'a', '2': 'd', '3': 'f', '4': 'k', '5': 'm', '6': 'o', '7': 'q'}

>>> a = Candidate('a', '1')
    >>> b = Candidate('b', '1')
    >>> c = Candidate('c', '2')
    >>> d = Candidate('d', '2')
    >>> e = Candidate('e', '3')
    >>> f = Candidate('f', '3')
    >>> g = Candidate('g', '3')
    >>> dict = {'1': [a, b], '2': [c, d], '3': [e, f, g]}
    >>> v_1 = Voter([a, c, g])
    >>> v_2 = Voter([a, c, g])
    >>> v_3 = Voter([a, d, g])
    >>> v_4 = Voter([b, c, e])
    >>> v_5 = Voter([b, c, g])
    >>> v_6 = Voter([b, d, f])
    >>> v_7 = Voter([a, d, f])
    >>> v_8 = Voter([b, d, g])
    >>> v_9 = Voter([a, d, f])
    >>> v_10 = Voter([b, c, e])
    >>> v_11 = Voter([b, c, f])
    >>> v_12 = Voter([b, c, f])
    >>> v_13 = Voter([a, d, e])
    >>> v_14 = Voter([b, d, g])
    >>> v_15 = Voter([a, d, f])
    >>> v_16 = Voter([b, c, g])
    >>> v_17 = Voter([a, c, f])
    >>> v_18 = Voter([b, c, g])
    >>> v_19 = Voter([a, d, e])
    >>> v_20 = Voter([a, d, e])
    >>> v_21 = Voter([a, c, g])
    >>> voters = [v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10, v_11, v_12, v_13, v_14, v_15, v_16, v_17, v_18, v_19, v_20, v_21]
    >>> greedy_PAV(voters, dict)
    {'1': 'a', '2': 'c', '3': 'g'}
    """
    logging.info("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
    logging.info("|||||||||||||||||||New Running of the algorithm|||||||||||||||||||")
    logging.info("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n")

    number_of_offices = len(offices_candidates)
    candidates_list = [candidate for office in offices_candidates.values() for candidate in office]
    logging.info("The candidates list: {}".format(candidates_list.__repr__()))
    results = {office: "" for office in offices_candidates}
    for i in range(number_of_offices):
        chosen_candidate = highest_candidate(candidates_list, voters)
        results[chosen_candidate.office] = chosen_candidate.name
        logging.info("Removes all candidates of the office {} that {} was elected to".format(chosen_candidate.office,
                                                                                             chosen_candidate.name))
        candidates_list = list(filter(lambda candidate: candidate.office != chosen_candidate.office, candidates_list))
        logging.info("The candidates list after the the filter: {}".format(candidates_list.__repr__()))
        for voter in voters:
            if chosen_candidate in voter.preferences:
                logging
                voter.reweight()
    logging.info("Selected list: {}\n".format(results.__repr__()))
    return results


if __name__ == '__main__':
    (failures, tests) = doctest.testmod(report=True)
    print("{} failures, {} tests".format(failures, tests))
