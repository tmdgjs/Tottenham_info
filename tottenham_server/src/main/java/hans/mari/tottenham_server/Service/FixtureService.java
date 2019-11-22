package hans.mari.tottenham_server.Service;

import hans.mari.tottenham_server.Domain.Fixture;

import java.util.List;

public interface FixtureService {

    List<Fixture> loadfixture(String date);

}
