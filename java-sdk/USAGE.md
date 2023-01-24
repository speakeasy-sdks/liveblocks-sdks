<!-- Start SDK Example Usage -->
```java
package hello.world;

import .Liveblocks;
import .models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            Liveblocks.Builder builder = Liveblocks.builder();

            Liveblocks sdk = builder.build();

            DeleteRoomsRoomIdRequest req = new DeleteRoomsRoomIdRequest() {{
                pathParams = new DeleteRoomsRoomIdPathParams() {{
                    roomId = "sit";
                }};
            }};

            DeleteRoomsRoomIdResponse res = sdk.deleteRoomsRoomId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->