package .models.operations;


public class PostRoomsResponse {
    public byte[] body;
    public PostRoomsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRoomsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public .models.shared.Error error;
    public PostRoomsResponse withError(.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public .models.shared.Room room;
    public PostRoomsResponse withRoom(.models.shared.Room room) {
        this.room = room;
        return this;
    }
    public Long statusCode;
    public PostRoomsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}