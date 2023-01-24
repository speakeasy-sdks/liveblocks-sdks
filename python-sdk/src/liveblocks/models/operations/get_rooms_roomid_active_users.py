import dataclasses
from typing import Optional
from ..shared import activeusersresponse as shared_activeusersresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class GetRoomsRoomIDActiveUsersPathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRoomsRoomIDActiveUsersRequest:
    path_params: GetRoomsRoomIDActiveUsersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRoomsRoomIDActiveUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    active_users_response: Optional[shared_activeusersresponse.ActiveUsersResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
