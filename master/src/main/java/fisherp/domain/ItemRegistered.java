package fisherp.domain;

import fisherp.domain.*;
import fisherp.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class ItemRegistered extends AbstractEvent {

    private Long id;
    private String itemName;
    private String itemCode;
    private ItemUnit itemUnit;

    public ItemRegistered(Item aggregate) {
        super(aggregate);
    }

    public ItemRegistered() {
        super();
    }
}
//>>> DDD / Domain Event
