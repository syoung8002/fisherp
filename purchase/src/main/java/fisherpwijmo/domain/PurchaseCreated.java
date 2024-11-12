package fisherpwijmo.domain;

import fisherpwijmo.domain.*;
import fisherpwijmo.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class PurchaseCreated extends AbstractEvent {

    private String purchaseType;
    private LocalDate purchaseDate;
    private LocalDate warehouseArrivalDate;
    private LocalDate storageFeePaymentDate;
    private Boolean storageFeePaymentStatus;
    private String mainShipName;
    private String productName;
    private AccountId accountId;
    private List<PurchaseDetail> purchaseDetails;

    public PurchaseCreated(Purchase aggregate) {
        super(aggregate);
    }

    public PurchaseCreated() {
        super();
    }
}
//>>> DDD / Domain Event
