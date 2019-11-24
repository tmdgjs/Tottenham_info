package hans.mari.tottenham_server.Service;

import hans.mari.tottenham_server.Domain.Fixture;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

@Service
public class FixtureServiceImpl implements FixtureService{
    @Override
    public List<Fixture> loadfixture(String date) {

        SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");

        Calendar now = Calendar.getInstance();

        int month = now.get(Calendar.MONTH) + 1;

        now.set(now.get(Calendar.YEAR), month  - 1, now.get(Calendar.DATE));

        String nowtime = format.format(now.getTime());

        String lastday = Integer.toString(now.getActualMaximum(Calendar.DAY_OF_MONTH));

        String day = "";

        int day_num = now.get(Calendar.DAY_OF_WEEK);

        check_day(day, day_num);

        //Fixture fixture = new Fix

        return null;
    }

    @Override
    public Fixture nextmatch(String date) {

        String nextyear = String.valueOf(Integer.parseInt(date.substring(0,4)) + 1);
        String newdate = nextyear + date.substring(4);

        String url = "https://media.daum.net/proxy/hermes/api/game/list.json?teamId=249&fromDate="+date+"&toDate="+newdate;


        Document doc;

        Fixture fixture = new Fixture();

        try {

            String raw = Jsoup.connect(url).ignoreContentType(true).execute().body();

            JSONObject obj = new JSONObject(raw);
            JSONArray array = obj.getJSONArray("list");

            System.out.print(date + " " + newdate);

            for(int i = 0 ; i < 1 ;i++) {
                JSONObject item = array.getJSONObject(i);

                String startDate = item.getString("startDate");
                String startTime = item.getString("startTime");
                String newtime = startTime.substring(0,2) + ":"+ startTime.substring(2);

                Calendar now = Calendar.getInstance();


                now.set(Integer.parseInt(startDate.substring(0,4)),(Integer.parseInt(startDate.substring(4,6))-1),Integer.parseInt(startDate.substring(6)));
                //use 변수
                String day = "";
                int day_num = now.get(Calendar.DAY_OF_WEEK);
                System.out.print(day_num);

                day = check_day(day, day_num);

                JSONObject hometeam = item.getJSONObject("home").getJSONObject("team");
                JSONObject awayteam = item.getJSONObject("away").getJSONObject("team");
                String hometeams = hometeam.getString("shortName");
                String awayteams = awayteam.getString("shortName");

                String league = item.getJSONObject("league").getString("leagueCode");

                String place = item.getJSONObject("field").getString("nameKo");
                String hometeamlogo  = hometeam.getString("imageUrl");
                String awayteamlogo = awayteam.getString("imageUrl");

                fixture = new Fixture(hometeams,hometeamlogo,awayteams,awayteamlogo,league,place,startDate,newtime,day);

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

    public static String check_day(String day, int day_num){

        switch(day_num){
            case 1:
                day = "SUN";
                break ;
            case 2:
                day = "MON";
                break ;
            case 3:
                day = "TUE";
                break ;
            case 4:
                day = "WEN";
                break ;
            case 5:
                day = "THU";
                break ;
            case 6:
                day = "FRI";
                break ;
            case 7:
                day = "SAT";
                break ;
        }

        return day;
    }
}
