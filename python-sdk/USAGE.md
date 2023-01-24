<!-- Start SDK Example Usage -->
```python
import liveblocks
from liveblocks.models import operations, shared

s = liveblocks.Liveblocks()
    
req = operations.DeleteRoomsRoomIDRequest(
    path_params=operations.DeleteRoomsRoomIDPathParams(
        room_id="sit",
    ),
)
    
res = s.delete_rooms_room_id(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->