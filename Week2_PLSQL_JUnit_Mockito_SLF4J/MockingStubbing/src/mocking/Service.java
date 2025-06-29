package mocking;
public class Service {
    private ExternalApi api;

    public Service(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
