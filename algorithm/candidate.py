class Candidate:
    """
    This class represent a candidate who wants to be elected to an office
    """
    def __init__(self,name:str,office:str):
        """
        :param name: name of candidate
        :param office: office of candidate
        """
        self.name=name
        self.office=office
    def __repr__(self):
        return f"name:{self.name} office:{self.office}"