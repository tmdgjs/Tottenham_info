package hans.mari.tottenham_server.Controller;

import hans.mari.tottenham_server.Domain.Fixture;
import hans.mari.tottenham_server.Service.FixtureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FixtureController {
    @Autowired
    private FixtureService fixtureService;

    @GetMapping("/fixture/nextmatch/{date}")
    public Fixture nextmatch(@PathVariable String date){
        return fixtureService.nextmatch(date);
    }
}
