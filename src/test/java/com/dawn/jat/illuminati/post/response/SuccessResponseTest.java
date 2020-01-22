package com.dawn.jat.illuminati.post.response;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

public class SuccessResponseTest {
    private static PostSummaryEntity postSummaryEntity;

    /**
     * Initializing postEntity object.
     */
    @BeforeAll
    public static void init() {
        postSummaryEntity = new PostSummaryEntity("how-to-apply-agile-methodology",
                "How to apply Agile methodology", "Guide",
                "01/01/2020", new String[]{"Agile"}, "Phat Ho");
    }

    @Test
    void success_Response_returnGetPostSuccessStatus() {
        List<PostSummaryEntity> mockPostSumEntities = Arrays.asList(postSummaryEntity);

        SuccessResponse succResp = new SuccessResponse();
        succResp.setSuccess(true);
        assertEquals(true, succResp.getSuccess());
        succResp.setData(mockPostSumEntities);
        assertEquals(mockPostSumEntities, succResp.getData());
    }
}
