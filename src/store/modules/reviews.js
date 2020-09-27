import { db } from "../../main";
import { fs } from "../../main";

export default {
    state: {
        reviews: [],
    },
    actions: {
        async createReview({ commit }, payload) {
            commit("CLEAR_ERROR")
            commit("SET_LOADING", true);

            const file = payload.file;
            const newReview = {
                email: payload.email,
                yourname: payload.yourname,
                tel: payload.tel,
                comment: payload.comment,
                checkbox: payload.checkbox,
                fileUrl: "",
                date: payload.date,
            }
            try {
                const review = await db.ref("reviews").push(newReview);
                if (file !== null) {
                    const fileExt = file.name.slice(file.name.lastIndexOf("."));
                    const fileRef = fs.ref(`reviews/${review.key}${fileExt}`);
                    await fileRef.put(file);
                    const fileSrc = await fileRef.getDownloadURL();
                    await db.ref("reviews").child(review.key).update({ fileUrl: fileSrc })
                }
                commit("SET_LOADING", false);
            } catch (error) {
                commit("SET_ERROR", error.message);
                commit("SET_LOADING", false);
                throw error
            }
        }
    },
};