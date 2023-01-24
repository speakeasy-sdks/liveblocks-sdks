package .models.operations;


public class GetRoomsRoomIdActiveUsersResponse {
    public .models.shared.ActiveUsersResponse activeUsersResponse;
    public GetRoomsRoomIdActiveUsersResponse withActiveUsersResponse(.models.shared.ActiveUsersResponse activeUsersResponse) {
        this.activeUsersResponse = activeUsersResponse;
        return this;
    }
    public String contentType;
    public GetRoomsRoomIdActiveUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public .models.shared.Error error;
    public GetRoomsRoomIdActiveUsersResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetRoomsRoomIdActiveUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}