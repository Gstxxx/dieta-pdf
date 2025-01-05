import { Context as GrammyContext, SessionFlavor } from "grammy";
import { UserSession } from "./session.types";

export type Context = GrammyContext & SessionFlavor<UserSession>;
