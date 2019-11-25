package hans.mari.tottenham_server.Service;

import hans.mari.tottenham_server.Domain.Fixture;
import hans.mari.tottenham_server.Domain.Matchup;

import java.util.List;

public interface FixtureService {

    List<Fixture> loadfixture(String date);

    List<Fixture> resultfixture(String date);

    Fixture nextmatch(String date);

    List<Integer> leaguetable(Long type);

    List<Matchup> sixCalendar(String date);


}
