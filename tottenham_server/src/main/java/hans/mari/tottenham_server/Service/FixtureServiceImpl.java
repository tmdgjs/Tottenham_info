package hans.mari.tottenham_server.Service;

import hans.mari.tottenham_server.Domain.Fixture;
import hans.mari.tottenham_server.Domain.Matchup;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Locale;

@Service
public class FixtureServiceImpl implements FixtureService{

    public String fixture_url(int type, String date,String newdate){

        //1 = fixtures, 2 = result

        switch (type)
        {
            case 1:
                return "https://media.daum.net/proxy/hermes/api/game/list.json?teamId=249&fromDate="+date+"&toDate="+newdate;
            case 2 :
                return "https://media.daum.net/proxy/hermes/api/game/list.json?sort=recent&teamId=249&fromDate="+newdate+"&toDate="+date;
            default:
                return "error";
        }

    }

    @Override
    public List<Fixture> loadfixture(String date) {

        String nextyear = String.valueOf(Integer.parseInt(date.substring(0,4)) + 1);
        String newdate = nextyear + date.substring(4);

        String url = "";

        url = fixture_url(1,date,newdate);


        List<Fixture> fixture_list = new ArrayList<Fixture>();

        try {

            String raw = Jsoup.connect(url).ignoreContentType(true).execute().body();
            JSONObject obj = new JSONObject(raw);
            JSONArray array = obj.getJSONArray("list");

            for (int i = 0; i < array.length(); i++) {

                JSONObject item = array.getJSONObject(i);
                JSONObject home = item.getJSONObject("home").getJSONObject("team");
                JSONObject away = item.getJSONObject("away").getJSONObject("team");

                String hometeam = parseString(home, "shortName");
                String awayteam = parseString(away, "shortName");

                String homelogo = parseString(home,"imageUrl");
                String awaylogo = parseString(away,"imageUrl");

                String league = item.getJSONObject("league").getString("name");

                String field = item.getJSONObject("field").getString("name");

                String startDate = parseString(item,"startDate");

                String startTime = parseString(item,"startTime");

                String hour = startTime.substring(0, 2);

                String min = startTime.substring(2);

                String time = hour + ":" + min;

                String day = "";

                Calendar cal = Calendar.getInstance();

                cal.set(Integer.parseInt(startDate.substring(0,4)),(Integer.parseInt(startDate.substring(4,6))-1),Integer.parseInt(startDate.substring(6)));

                int day_num = cal.get(Calendar.DAY_OF_WEEK);

                day = check_day(1,day, day_num);

                DateFormat format = new SimpleDateFormat("dd MMM", Locale.ENGLISH);

                String dateformat = format.format(cal.getTime());

                Fixture fixture = new Fixture(i, hometeam, homelogo, awayteam, awaylogo, league, field, dateformat, time, day);
                fixture_list.add(fixture);

            }
        }
        catch(JSONException e) {
            e.printStackTrace();
        }

        catch(IOException e){
            e.printStackTrace();
        }

        return fixture_list;
    }

    public String parseString(JSONObject obj, String key){
        return obj.getString(key);
    }

    @Override
    public List<Fixture> resultfixture(String date) {

        String nextyear = String.valueOf(Integer.parseInt(date.substring(0,4)) - 1);
        String newdate = nextyear + date.substring(4);

        String url = "";

        url = fixture_url(2,date,newdate);


        List<Fixture> fixture_rs_list = new ArrayList<Fixture>();

        try {

            String raw = Jsoup.connect(url).ignoreContentType(true).execute().body();
            JSONObject obj = new JSONObject(raw);
            JSONArray array = obj.getJSONArray("list");

            for (int i = 0; i < array.length(); i++) {

                JSONObject item = array.getJSONObject(i);
                JSONObject home = item.getJSONObject("home").getJSONObject("team");
                JSONObject away = item.getJSONObject("away").getJSONObject("team");

                String hometeam = parseString(home, "shortName");
                String awayteam = parseString(away, "shortName");

                String homelogo = parseString(home,"imageUrl");
                String awaylogo = parseString(away,"imageUrl");

                String homescore = parseString(item.getJSONObject("home"),"result");
                String awayscore = parseString(item.getJSONObject("away"),"result");

                String league = item.getJSONObject("league").getString("name");

                String field = item.getJSONObject("field").getString("name");

                String startDate = parseString(item,"startDate");

                String startTime = parseString(item,"startTime");

                String hour = startTime.substring(0, 2);

                String min = startTime.substring(2);

                String time = hour + ":" + min;

                String day = "";

                Calendar cal = Calendar.getInstance();

                cal.set(Integer.parseInt(startDate.substring(0,4)),(Integer.parseInt(startDate.substring(4,6))-1),Integer.parseInt(startDate.substring(6)));

                int day_num = cal.get(Calendar.DAY_OF_WEEK);

                day = check_day(1,day, day_num);

                DateFormat format = new SimpleDateFormat("dd MMM", Locale.ENGLISH);

                String dateformat = format.format(cal.getTime());

                Fixture fixture = new Fixture(i, hometeam, homelogo, homescore, awayteam, awaylogo, awayscore, league, field, dateformat, time, day);
                fixture_rs_list.add(fixture);

            }
        }
        catch(JSONException e) {
            e.printStackTrace();
        }

        catch(IOException e){
            e.printStackTrace();
        }

        return fixture_rs_list;

    }



    @Override
    public List<Matchup> sixCalendar(String date) {

        String nextyear = String.valueOf(Integer.parseInt(date.substring(0,4)) + 1);
        String newdate = nextyear + date.substring(4);

        String url ="";

        url = fixture_url(1,date,newdate);

        List<Matchup> matchupList = new ArrayList<Matchup>();

        try {

            String raw = Jsoup.connect(url).ignoreContentType(true).execute().body();
            JSONObject obj = new JSONObject(raw);
            JSONArray array = obj.getJSONArray("list");

            for (int i = 0; i < 6; i++) {

                JSONObject item = array.getJSONObject(i);
                JSONObject hometeam = item.getJSONObject("home").getJSONObject("team");
                JSONObject awayteam = item.getJSONObject("away").getJSONObject("team");

                String startDate = item.getString("startDate");
                DateFormat format = new SimpleDateFormat("dd MMM", Locale.ENGLISH);

                String startTime = item.getString("startTime");

                String hour = startTime.substring(0, 2);

                String min = startTime.substring(2);

                String mer = "AM";

                String day = "";
                Calendar cal = Calendar.getInstance();
                cal.set(Integer.parseInt(startDate.substring(0,4)),(Integer.parseInt(startDate.substring(4,6))-1),Integer.parseInt(startDate.substring(6)));

                int day_num = cal.get(Calendar.DAY_OF_WEEK);

                day = check_day(2,day, day_num);

                String dateformat = format.format(cal.getTime());

                if (Integer.parseInt(hour) >= 13) {
                    hour = String.valueOf(Integer.parseInt(hour) - 12);
                    mer = "PM";
                }

                else if(Integer.parseInt(hour) == 0){
                    hour = String.valueOf(12);
                }

                String time = hour + ":" + min;

                String enemy = hometeam.getString("shortName");
                String enemylogo = hometeam.getString("imageUrl");
                String field = item.getJSONObject("field").getString("nameKo");

                if(enemy.equals("토트넘")) {
                    enemylogo = awayteam.getString("imageUrl");

                }

                Matchup matchup = new Matchup(i,enemylogo,field,dateformat,time,day,mer);
                matchupList.add(matchup);

            }
        }
        catch(JSONException e) {
            e.printStackTrace();
        }

        catch(IOException e){
            e.printStackTrace();
        }

        return matchupList;
    }


    @Override
    public Fixture nextmatch(String date) {

        String nextyear = String.valueOf(Integer.parseInt(date.substring(0,4)) + 1);
        String newdate = nextyear + date.substring(4);


        String url ="";

        url = fixture_url(1,date,newdate);

        Fixture fixture = new Fixture();

        try {

            String raw = Jsoup.connect(url).ignoreContentType(true).execute().body();

            JSONObject obj = new JSONObject(raw);
            JSONArray array = obj.getJSONArray("list");

            for(int i = 0 ; i < 1 ;i++) {
                JSONObject item = array.getJSONObject(i);

                String startDate = item.getString("startDate");
                String startTime = item.getString("startTime");
                String newtime = startTime.substring(0,2) + ":"+ startTime.substring(2);

                Calendar now = Calendar.getInstance();

                now.set(Integer.parseInt(startDate.substring(0,4)),(Integer.parseInt(startDate.substring(4,6))-1),Integer.parseInt(startDate.substring(6)));

                String day = "";

                int day_num = now.get(Calendar.DAY_OF_WEEK);

                day = check_day(1,day, day_num);

                JSONObject hometeam = item.getJSONObject("home").getJSONObject("team");
                JSONObject awayteam = item.getJSONObject("away").getJSONObject("team");
                String hometeams = hometeam.getString("shortName");
                String awayteams = awayteam.getString("shortName");

                String league = item.getJSONObject("league").getString("leagueCode");

                String place = item.getJSONObject("field").getString("nameKo");
                String hometeamlogo  = hometeam.getString("imageUrl");
                String awayteamlogo = awayteam.getString("imageUrl");

                DateFormat format = new SimpleDateFormat("dd MMMM", Locale.ENGLISH);

                String dateformat = format.format(now.getTime());



                fixture = new Fixture(hometeams,hometeamlogo,awayteams,awayteamlogo,league,place,dateformat,newtime,day);

            }

        }
        catch(JSONException e) {
            e.printStackTrace();
        }

        catch(IOException e){
            e.printStackTrace();
        }

        return fixture;
    }

    @Override
    public List<Integer> leaguetable(Long type) {

        Calendar cal = Calendar.getInstance();

        int value = cal.get(Calendar.YEAR);
        int nextvalue = cal.get(Calendar.YEAR) +1;

        String year = String.valueOf(value) + String.valueOf(nextvalue);

        String url = "";

        if(type == 1L){
            url = "https://media.daum.net/proxy/hermes/api/team/rank.json?leagueCode=epl";
        }
        else if(type == 2L){
            url = "https://media.daum.net/proxy/hermes/api/team/rank.json?leagueCode=uefacl&seasonKey="+year;
        }

        Document doc;

        List<Integer> rankinglist = new ArrayList<Integer>();

        String[] value_array = {"rank","game","win","draw","loss","gf","ga","gd","pts"};

        try {
            String raw = Jsoup.connect(url).ignoreContentType(true).execute().body();

            JSONObject root = new JSONObject(raw);

            JSONArray array = root.getJSONArray("list");

            for (int i = 0; i < array.length(); i++) {

                JSONObject item = array.getJSONObject(i);
                JSONObject ranking = item.getJSONObject("rank");

                String team = item.getString("shortNameKo");

                if(!team.equals("토트넘")) {
                    continue;
                }

                for(int j =  0 ; j < value_array.length; j++) {
                    listadd(value_array[j],ranking,rankinglist);
                }

                break;

            }

        } catch (JSONException e) {
            e.printStackTrace();
        }
        catch(IOException e) {
            e.printStackTrace();
        }

        return rankinglist;
    }


    public static void listadd(String value, JSONObject obj, List<Integer> rankinglist) {
        int v = obj.getInt(value);

        rankinglist.add(v);
    }

    public static String check_day(int day_type, String day, int day_num){

        switch(day_num){
            case 1:
                day = parse_datetype(day_type, "SUN","Sunday");
                break ;
            case 2:
                day = parse_datetype(day_type,  "MON","Monday");
                break ;
            case 3:
                day = parse_datetype(day_type,  "TUE","Tuesday");
                break ;
            case 4:
                day = parse_datetype(day_type,  "WED","Wednesday");
                break ;
            case 5:
                day = parse_datetype(day_type, "THU","Thursday");
                break ;
            case 6:
                day = parse_datetype(day_type, "FRI","Friday");
                break ;
            case 7:
                day = parse_datetype(day_type, "SAT","Saturday");
                break ;
        }

        return day;
    }

    public static String parse_datetype(int day_type, String s, String f){
        if(day_type == 1){
            return f;
        }
        else{
            return s;
        }
    }
}
