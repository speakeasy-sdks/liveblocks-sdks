<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := liveblocks.New()
    
    req := operations.DeleteRoomsRoomIDRequest{
        PathParams: operations.DeleteRoomsRoomIDPathParams{
            RoomID: "sit",
        },
    }
    
    res, err := s.DeleteRoomsRoomID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->