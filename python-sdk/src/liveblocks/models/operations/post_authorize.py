import dataclasses
from typing import Optional
from ..shared import createauthorization as shared_createauthorization
from ..shared import authorization as shared_authorization
from ..shared import error as shared_error


@dataclasses.dataclass
class PostAuthorizePathParams:
    room_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roomId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAuthorizeRequest:
    path_params: PostAuthorizePathParams = dataclasses.field()
    request: Optional[shared_createauthorization.CreateAuthorization] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAuthorizeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization: Optional[shared_authorization.Authorization] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
