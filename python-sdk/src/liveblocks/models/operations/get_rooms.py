import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import getrooms as shared_getrooms


@dataclasses.dataclass
class GetRoomsQueryParams:
    group_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupIds', 'style': 'form', 'explode': True }})
    limit: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    metadata_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'metadata.KEY', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRoomsRequest:
    query_params: GetRoomsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRoomsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_rooms: Optional[shared_getrooms.GetRooms] = dataclasses.field(default=None)
    
