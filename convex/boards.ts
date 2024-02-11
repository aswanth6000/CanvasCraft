import { v } from "convex/values"

import { query } from "./_generated/server";
import { favorite } from "./board";

export const get = query({
    args: {
        orgId :v.string()
    },
    handler: async(ctx, args) =>{
        const identity = await ctx.auth.getUserIdentity();

        if(!identity){
            throw new Error("Unauthorized")
        }
        const boards = await ctx.db
        .query("boards")
        .withIndex("BY_org", (q)=> q.eq("orgId", args.orgId))
        .order("desc")
        .collect()

        const boardsWithFavouriteRelation = boards.map((board)=>{
            return ctx.db
            .query("userFavorites")
            .withIndex("by_user_board", (q)=>
            q
                .eq("userId", identity.subject)
                .eq("boardId", board._id)
            )
            .unique()
            .then((favorite)=>{
                return {
                    ...board,
                    isFavorite: !!favorite //converting to boolean value
                }
            })
        })
        const boardsWithFavouriteBoolean = Promise.all(boardsWithFavouriteRelation)

        return boardsWithFavouriteBoolean
    }
})