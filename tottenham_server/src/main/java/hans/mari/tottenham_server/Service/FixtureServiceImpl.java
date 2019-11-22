package hans.mari.tottenham_server.Service;

import hans.mari.tottenham_server.Domain.Fixture;
import org.springframework.stereotype.Service;

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

        Fixture fixture = new Fix

        return null;
    }

    public void check_day(String day, int day_num){

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
    }
}
