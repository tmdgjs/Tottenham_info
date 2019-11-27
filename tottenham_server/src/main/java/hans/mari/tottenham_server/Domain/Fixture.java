package hans.mari.tottenham_server.Domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Fixture {

    int id;


    String home;
    String homelogo;
    String homescore;

    String away;
    String awaylogo;
    String awayscore;

    String leaguetype;
    String matchplace;

    String date;
    String time;
    String day;

    public Fixture(String home, String homelogo, String homescore, String away, String awaylogo, String awayscore, String leaguetype, String matchplace, String date, String time, String day) {
        this.home = home;
        this.homelogo = homelogo;
        this.homescore = homescore;
        this.away = away;
        this.awaylogo = awaylogo;
        this.awayscore = awayscore;
        this.leaguetype = leaguetype;
        this.matchplace = matchplace;
        this.date = date;
        this.time = time;
        this.day = day;
    }


    public Fixture(int id, String home, String homelogo, String homescore, String away, String awaylogo, String awayscore, String leaguetype, String matchplace, String date, String time, String day) {
        this.id = id;
        this.home = home;
        this.homelogo = homelogo;
        this.homescore = homescore;
        this.away = away;
        this.awaylogo = awaylogo;
        this.awayscore = awayscore;
        this.leaguetype = leaguetype;
        this.matchplace = matchplace;
        this.date = date;
        this.time = time;
        this.day = day;
    }






}
