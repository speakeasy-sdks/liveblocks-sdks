import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from liveblocks import utils


@dataclass_json
@dataclasses.dataclass
class Authorization:
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
