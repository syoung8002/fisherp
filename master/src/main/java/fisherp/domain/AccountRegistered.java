package fisherp.domain;

import fisherp.domain.*;
import fisherp.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class AccountRegistered extends AbstractEvent {

    private String businessRegistrationNumber;
    private String accountName;
    private String representative;
    private Address address;
    private String industry;
    private String category;
    private String customerType;

    public AccountRegistered(Account aggregate) {
        super(aggregate);
    }

    public AccountRegistered() {
        super();
    }
}
//>>> DDD / Domain Event
