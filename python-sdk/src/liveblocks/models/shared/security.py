import dataclasses



@dataclasses.dataclass
class SchemeAuthorization:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Bearer sk_xxx' }})
    
