import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from liveblocks import utils


@dataclass_json
@dataclasses.dataclass
class CreateRoom:
    default_accesses: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAccesses') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    groups_accesses: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupsAccesses') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    users_accesses: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usersAccesses') }})
    
