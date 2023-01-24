import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from liveblocks import utils


@dataclass_json
@dataclasses.dataclass
class ActiveUsersResponseData:
    connection_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ActiveUsersResponse:
    data: Optional[list[ActiveUsersResponseData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
