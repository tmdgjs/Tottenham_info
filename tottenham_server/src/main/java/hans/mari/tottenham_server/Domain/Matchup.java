package hans.mari.tottenham_server.Domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GeneratorType;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
public class Matchup {

    int id;

    String enemylogo;

    String matchplace;

    String date;

    String time;

    String day;

    String mer;

    public Matchup(int id, String enemylogo, String matchplace, String date, String time, String day, String mer) {
        this.id = id;
        this.enemylogo = enemylogo;
        this.matchplace = matchplace;
        this.date = date;
        this.time = time;
        this.day = day;
        this.mer = mer;
    }
}
