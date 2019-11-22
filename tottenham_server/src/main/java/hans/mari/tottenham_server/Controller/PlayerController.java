package hans.mari.tottenham_server.Controller;

import hans.mari.tottenham_server.Domain.Player;
import hans.mari.tottenham_server.Service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @GetMapping("/player/add")
    public List<Player> Playeradd(){
        return playerService.loadplayers();
    }

}
