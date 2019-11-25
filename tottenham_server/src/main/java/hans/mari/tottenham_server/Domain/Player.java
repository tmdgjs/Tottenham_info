package hans.mari.tottenham_server.Domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Entity
@Data
@NoArgsConstructor
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String playername;

    private String playertype;

    private String playercountry;

    private String playernum;

    private String playerimg;

    public Player(int id, String playername, String playertype, String playercountry, String playernum, String playerimg) {
        this.id = id;
        this.playername = playername;
        this.playertype = playertype;
        this.playercountry = playercountry;
        this.playernum = playernum;
        this.playerimg = playerimg;
    }



}
