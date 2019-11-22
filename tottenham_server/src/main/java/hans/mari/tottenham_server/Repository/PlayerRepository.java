package hans.mari.tottenham_server.Repository;

import hans.mari.tottenham_server.Domain.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
