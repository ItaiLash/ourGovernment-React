class Voter:
    """
    This class represent voter who participant in the offices election
    """

    def __init__(self, preferences: list):
        """
        Initiate the weight of this voter to 1, which is the weight of the candidate according to Greedy PAV
        Initiate the number_of_satisfaction of this voter to 0, which is the number of times that the candidate
        that was elected this voter vote to him.
        :param preferences: List of candidates that this voter voted to.
        """
        self.preferences = preferences
        self.weight = 1
        self.number_of_satisfaction = 0

    def reweight(self):
        """
        Update the weight of this voter according to the harmonic series.
        According to Greedy PAV voter will be reweight iff a candidate that the voter vote to was elected.
        """
        self.number_of_satisfaction += 1
        self.weight = 1 / (self.number_of_satisfaction + 1)


    def __repr__(self):
        return f"Voter weight:{self.weight} number of good votes:{self.number_of_satisfaction} preferences: {self.preferences} "
