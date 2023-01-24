import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from liveblocks import utils
from ..shared import error as shared_error


@dataclasses.dataclass
class PostRoomsRoomIDStoragePathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostRoomsRoomIDStorageRequestBody:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    liveblocks_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveblocksType') }})
    

@dataclass_json
@dataclasses.dataclass
class PostRoomsRoomIDStorage200ApplicationJSON:
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    liveblocks_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveblocksType') }})
    

@dataclasses.dataclass
class PostRoomsRoomIDStorageRequest:
    path_params: PostRoomsRoomIDStoragePathParams = dataclasses.field()
    request: Optional[PostRoomsRoomIDStorageRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRoomsRoomIDStorageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    post_rooms_room_id_storage_200_application_json_object: Optional[PostRoomsRoomIDStorage200ApplicationJSON] = dataclasses.field(default=None)
    
