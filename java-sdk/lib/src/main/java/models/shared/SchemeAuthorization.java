package .models.shared;

import .utils.SpeakeasyMetadata;
public class SchemeAuthorization {
    @SpeakeasyMetadata("security:name=Bearer sk_xxx")
    public String apiKey;
    public SchemeAuthorization withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}