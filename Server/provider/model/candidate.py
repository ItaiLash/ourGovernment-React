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

    def __eq__(self, o: object) -> bool:
        return self.name==o.name and self.office==o.office

    def __repr__(self):
        return f"Candidate name:{self.name} office:{self.office}"

    def __hash__(self) -> int:
        return (self.name+self.office).__hash__()
