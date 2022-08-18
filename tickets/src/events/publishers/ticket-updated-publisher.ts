import { Publisher, Subjects, TicketUpdatedEvent } from "@yzdtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
