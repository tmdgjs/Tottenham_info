package hans.mari.tottenham_server.Domain;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class Fixture {


    public Fixture(String home, String homelogo, String away, String awaylogo, String leaguetype, String matchplace, String date, String time, String day) {
        this.home = home;
        this.homelogo = homelogo;
        this.away = away;
        this.awaylogo = awaylogo;
        this.leaguetype = leaguetype;
        this.matchplace = matchplace;
        this.date = date;
        this.time = time;
        this.day = day;
    }

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

    public String getHomescore() {
        return homescore;
    }

    public void setHomescore(String homescore) {
        this.homescore = homescore;
    }

    public String getAwayscore() {
        return awayscore;
    }

    public void setAwayscore(String awayscore) {
        this.awayscore = awayscore;
    }




    public String getHome() {
        return home;
    }

    public void setHome(String home) {
        this.home = home;
    }

    public String getHomelogo() {
        return homelogo;
    }

    public void setHomelogo(String homelogo) {
        this.homelogo = homelogo;
    }

    public String getAway() {
        return away;
    }

    public void setAway(String away) {
        this.away = away;
    }

    public String getAwaylogo() {
        return awaylogo;
    }

    public void setAwaylogo(String awaylogo) {
        this.awaylogo = awaylogo;
    }

    public String getLeaguetype() {
        return leaguetype;
    }

    public void setLeaguetype(String leaguetype) {
        this.leaguetype = leaguetype;
    }

    public String getMatchplace() {
        return matchplace;
    }

    public void setMatchplace(String matchplace) {
        this.matchplace = matchplace;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }




}
