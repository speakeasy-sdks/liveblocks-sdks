import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from liveblocks import utils
from ..shared import error as shared_error


@dataclasses.dataclass
class GetRoomsRoomIDStoragePathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetRoomsRoomIDStorage200ApplicationJSON:
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    liveblocks_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveblocksType') }})
    

@dataclasses.dataclass
class GetRoomsRoomIDStorageRequest:
    path_params: GetRoomsRoomIDStoragePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRoomsRoomIDStorageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_rooms_room_id_storage_200_application_json_object: Optional[GetRoomsRoomIDStorage200ApplicationJSON] = dataclasses.field(default=None)
    
