import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import updateroom as shared_updateroom
from ..shared import error as shared_error
from ..shared import room as shared_room


@dataclasses.dataclass
class PostRoomsRoomIDPathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRoomsRoomIDRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    update_room: Optional[shared_updateroom.UpdateRoom] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostRoomsRoomIDRequest:
    path_params: PostRoomsRoomIDPathParams = dataclasses.field()
    request: Optional[PostRoomsRoomIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostRoomsRoomIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    room: Optional[shared_room.Room] = dataclasses.field(default=None)
    
