package hans.mari.tottenham_server.Service;

import hans.mari.tottenham_server.Domain.Player;
import hans.mari.tottenham_server.Repository.PlayerRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    @Override
    public List<Player> loadplayers(Long type) {

        List<Player> playerlst = new ArrayList<Player>();
        List<Player> loanlst = new ArrayList<>();
        if(type == 1L){
            playersadd(playerlst, type);
            return playerlst;
        }
        else{
            playersadd(loanlst, type);
            return loanlst;
        }


    }

    public void playersadd(List<Player> playerlst,Long type){

        String url = "https://www.tottenhamhotspur.com/teams/first-team/players/";

        Document doc;


        try {
            doc = Jsoup.connect(url).get();

            String docimgsel = "a.PlayersPlayer > div.PlayersPlayer__photo > img";
            String docinfosel = "a.PlayersPlayer > div.PlayersPlayer__info > div.PlayersPlayer__";
            String playertype = "team";

            Elements name = doc.select(docinfosel + "name");
            Elements country = doc.select(docinfosel + "country");
            Elements backnum = doc.select(docinfosel + "number");
            Elements imageurl = doc.select(docimgsel);

            for(int i = 0 ; i < imageurl.size() ; i++) {

                String imgurl = imageurl.get(i).attr("data-src");
                String image[] = imgurl.split("\\*,\\*");
                String names = name.get(i).text();
                String countrys = country.get(i).text().trim();
                String countryls[] = countrys.split(",");
                String backnums = backnum.get(i).text();

                if(type == 2L){

                    if(!backnums.equals("")){
                        continue;

                    }

                }
                else {
                    if(backnums.equals("")){
                        break;
                        //playertype = "loan";
                    }
                }

                Player player  = new Player(i,names,playertype,countryls[1],backnums,image[0]);
                newplayer(playerlst,player);

            }
        } catch (IOException e) {
        // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    public void newplayer(List<Player> playerls ,Player player){

        playerls.add(player);
    }


}
