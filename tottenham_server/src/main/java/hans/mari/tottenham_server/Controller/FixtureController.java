package hans.mari.tottenham_server.Controller;

import hans.mari.tottenham_server.Domain.Fixture;
import hans.mari.tottenham_server.Domain.Matchup;
import hans.mari.tottenham_server.Service.FixtureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FixtureController {
    @Autowired
    private FixtureService fixtureService;

    @GetMapping("/fixture/nextmatch/{date}")
    public Fixture nextmatch(@PathVariable String date){
        return fixtureService.nextmatch(date);
    }

    @GetMapping("/fixture/sixmatch/{date}")
    public List<Matchup> sixmatch(@PathVariable String date){
        return fixtureService.sixCalendar(date);
    }

    @GetMapping("/leaguetable/{type}")
    public List<Integer> load_leaguetable(@PathVariable Long type){
        return fixtureService.leaguetable(type);
    }
}
