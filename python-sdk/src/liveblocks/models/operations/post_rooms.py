import dataclasses
from typing import Optional
from ..shared import createroom as shared_createroom
from ..shared import error as shared_error
from ..shared import room as shared_room


@dataclasses.dataclass
class PostRoomsRequest:
    request: Optional[shared_createroom.CreateRoom] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRoomsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    room: Optional[shared_room.Room] = dataclasses.field(default=None)
    
