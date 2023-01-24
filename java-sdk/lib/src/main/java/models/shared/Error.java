package .models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
public class Error {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doc")
    public String doc;
    public Error withDoc(String doc) {
        this.doc = doc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public Error withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public Error withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestion")
    public String suggestion;
    public Error withSuggestion(String suggestion) {
        this.suggestion = suggestion;
        return this;
    }
}