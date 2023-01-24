import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import room as shared_room


@dataclasses.dataclass
class GetRoomsRoomIDPathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRoomsRoomIDRequest:
    path_params: GetRoomsRoomIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRoomsRoomIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    room: Optional[shared_room.Room] = dataclasses.field(default=None)
    
