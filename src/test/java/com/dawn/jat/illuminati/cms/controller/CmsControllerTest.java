package com.dawn.jat.illuminati.cms.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(classes = CmsController.class)
public class CmsControllerTest {
    @Autowired
    private CmsController cmsController;

    @Test
    public void testAccessMainCmsPage() {
        assertEquals("cms/index", cmsController.index());
    }
}
