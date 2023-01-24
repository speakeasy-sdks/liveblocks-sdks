<!-- Start SDK Example Usage -->
```typescript
import { Liveblocks, withSecurity} from "openapi";
import { DeleteRoomsRoomIdRequest, DeleteRoomsRoomIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new Liveblocks();
    
const req: DeleteRoomsRoomIdRequest = {
  pathParams: {
    roomId: "sit",
  },
};

sdk.deleteRoomsRoomId(req).then((res: DeleteRoomsRoomIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->