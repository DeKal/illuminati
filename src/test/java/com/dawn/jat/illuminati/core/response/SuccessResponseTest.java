package com.dawn.jat.illuminati.core.response;

import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

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

        SuccessResponse succResp = new SuccessResponse(mockPostSumEntities);

        assertEquals(true, succResp.getSuccess());
        assertEquals(mockPostSumEntities, succResp.getData());
    }
}
