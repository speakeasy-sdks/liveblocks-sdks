import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteRoomsRoomIDStoragePathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRoomsRoomIDStorageRequest:
    path_params: DeleteRoomsRoomIDStoragePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRoomsRoomIDStorageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
